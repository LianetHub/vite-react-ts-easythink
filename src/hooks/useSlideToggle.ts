import { useRef } from "react";

export const useSlideToggle = (duration = 300) => {
	const elementRef = useRef<HTMLDivElement | null>(null);

	const slideToggle = (callback?: () => void) => {
		if (!elementRef.current) return;
		if (window.getComputedStyle(elementRef.current).display === "none") {
			slideDown(elementRef.current, duration, callback);
		} else {
			slideUp(elementRef.current, duration, callback);
		}
	};

	const slideUp = (element: HTMLDivElement, duration = 300, callback?: () => void) => {
		element.style.overflow = "hidden";
		const elStyles = window.getComputedStyle(element);

		const elHeight = element.offsetHeight;
		const elPaddingTop = parseFloat(elStyles.paddingTop);
		const elPaddingBottom = parseFloat(elStyles.paddingBottom);
		const elMarginTop = parseFloat(elStyles.marginTop);
		const elMarginBottom = parseFloat(elStyles.marginBottom);

		const stepHeight = elHeight / duration;
		const stepPaddingTop = elPaddingTop / duration;
		const stepPaddingBottom = elPaddingBottom / duration;
		const stepMarginTop = elMarginTop / duration;
		const stepMarginBottom = elMarginBottom / duration;

		let start: number;

		function step(timestamp: number) {
			if (!start) start = timestamp;
			const elapsed = timestamp - start;

			element.style.height = Math.max(elHeight - stepHeight * elapsed, 0) + "px";
			element.style.paddingTop = Math.max(elPaddingTop - stepPaddingTop * elapsed, 0) + "px";
			element.style.paddingBottom = Math.max(elPaddingBottom - stepPaddingBottom * elapsed, 0) + "px";
			element.style.marginTop = Math.max(elMarginTop - stepMarginTop * elapsed, 0) + "px";
			element.style.marginBottom = Math.max(elMarginBottom - stepMarginBottom * elapsed, 0) + "px";

			if (elapsed >= duration) {
				element.style.display = "none";
				element.style.height = "";
				element.style.paddingTop = "";
				element.style.paddingBottom = "";
				element.style.marginTop = "";
				element.style.marginBottom = "";
				element.style.overflow = "";
				if (callback) callback();
			} else {
				requestAnimationFrame(step);
			}
		}

		requestAnimationFrame(step);
	};

	const slideDown = (element: HTMLDivElement, duration = 300, callback?: () => void) => {
		element.style.display = "block";
		const elStyles = window.getComputedStyle(element);

		const elHeight = element.scrollHeight;
		const elPaddingTop = parseFloat(elStyles.paddingTop);
		const elPaddingBottom = parseFloat(elStyles.paddingBottom);
		const elMarginTop = parseFloat(elStyles.marginTop);
		const elMarginBottom = parseFloat(elStyles.marginBottom);

		element.style.overflow = "hidden";
		element.style.height = "0px";
		element.style.paddingTop = "0px";
		element.style.paddingBottom = "0px";
		element.style.marginTop = "0px";
		element.style.marginBottom = "0px";

		const stepHeight = elHeight / duration;
		const stepPaddingTop = elPaddingTop / duration;
		const stepPaddingBottom = elPaddingBottom / duration;
		const stepMarginTop = elMarginTop / duration;
		const stepMarginBottom = elMarginBottom / duration;

		let start: number;

		function step(timestamp: number) {
			if (!start) start = timestamp;
			const elapsed = timestamp - start;

			element.style.height = Math.min(stepHeight * elapsed, elHeight) + "px";
			element.style.paddingTop = Math.min(stepPaddingTop * elapsed, elPaddingTop) + "px";
			element.style.paddingBottom = Math.min(stepPaddingBottom * elapsed, elPaddingBottom) + "px";
			element.style.marginTop = Math.min(stepMarginTop * elapsed, elMarginTop) + "px";
			element.style.marginBottom = Math.min(stepMarginBottom * elapsed, elMarginBottom) + "px";

			if (elapsed >= duration) {
				element.style.height = "";
				element.style.paddingTop = "";
				element.style.paddingBottom = "";
				element.style.marginTop = "";
				element.style.marginBottom = "";
				element.style.overflow = "";
				if (callback) callback();
			} else {
				requestAnimationFrame(step);
			}
		}

		requestAnimationFrame(step);
	};

	return { elementRef, slideToggle };
};
