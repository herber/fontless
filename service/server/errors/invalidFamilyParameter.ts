export let invalidFamilyParameterError = (family: string, hint?: string) => ({
  code: 'invalid_family_parameter',
  message: 'The supplied family parameter is invalid',
  error: {
    family,
    hint
  }
});
