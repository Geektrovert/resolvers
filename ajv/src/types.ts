import {
  FieldValues,
  ResolverOptions,
  ResolverResult,
  UnpackNestedValue,
} from 'react-hook-form';
import * as Ajv from 'ajv';

export type Resolver = <T extends Ajv.AnySchema>(
  schema: T,
  schemaOptions?: Ajv.Options,
) => <TFieldValues extends FieldValues, TContext>(
  values: UnpackNestedValue<TFieldValues>,
  context: TContext | undefined,
  options: ResolverOptions<TFieldValues>,
) => Promise<ResolverResult<TFieldValues>>;
