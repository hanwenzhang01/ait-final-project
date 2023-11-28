import { Rule } from '@/types';
import { RuleError } from '@/modules/rule-error';
import { REQUIRED } from '@/types/rules';

function required(value: string): true | RuleError {
  return value.trim().length > 0 || new RuleError(REQUIRED);
}

export default required as Rule;
