export const BREAKPOINT = 768

export const constructUrl = (baseUrl, path) =>
    !baseUrl || !path ? null : `${baseUrl}${path}`