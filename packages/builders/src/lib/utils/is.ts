export function isHtmlElement(element: unknown): element is HTMLElement {
	return element instanceof HTMLElement;
}

export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
	return typeof value === "function";
}

export function isObject(value: unknown): value is Record<PropertyKey, unknown> {
	return value !== null && typeof value === "object";
}

export function isHtmlInputElement(element: unknown): element is HTMLInputElement {
	return element instanceof HTMLInputElement;
}
