import { AdapterFn, FormInputElement, XRules } from '@/types';
import { getValue, processRule, toCamelCase } from '@/utils/helpers';

const mapMethods: Record<string, AdapterFn> = {
  requiredIf: prependTargetValue,
  between: prependType,
  size: prependType,
  min: prependType,
  max: prependType,
  in: prependType,
};

export function adaptRule(
  rule: string,
  rules: string[],
  field: FormInputElement,
  container: HTMLElement,
  xRules?: XRules
): string {
  const ruleName = toCamelCase(processRule(rule, xRules).name);

  return mapMethods[ruleName]?.(rule, rules, field, container, xRules) || rule;
}

export function prependType(
  rule: string,
  rules: string[],
  _field: FormInputElement,
  _parentEl: HTMLElement,
  xRules?: XRules
): string {
  const { name, argsText } = processRule(rule, xRules);

  const indexOfRule = rules.indexOf(rule);
  const rulesBeforeRule = rules.slice(0, indexOfRule);

  let type = 'string';
  if (rulesBeforeRule.includes('number') || rulesBeforeRule.includes('int') || rulesBeforeRule.includes('integer')) {
    type = 'number';
  } else if (rulesBeforeRule.includes('array')) {
    type = 'array';
  }

  return `${name}:${type},${argsText}`;
}

function prependTargetValue(
  rule: string,
  _rules: string[],
  _field: FormInputElement,
  _parentEl: HTMLElement,
  xRules?: XRules
): string {
  const { name, args } = processRule(rule, xRules);

  if (args.length === 0) return name;

  let targetValue = '';
  if (args.length > 0) {
    const targetField = document.getElementById(args[0]);
    if (targetField !== null) {
      targetValue = getValue(targetField as FormInputElement);
    }
  }

  args.splice(0, 1, targetValue);

  return `${name}:${args.join(',')}`;
}
