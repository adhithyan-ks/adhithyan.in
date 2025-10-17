import { getContext, setContext } from 'svelte';

const TIMELINE_CONTEXT = 'timeline:context';

type TimelineContextValue = {
	activeStep: () => number;
	setActiveStep: (step: number) => void;
};

export const setTimelineContext = (context: TimelineContextValue) => {
	setContext(TIMELINE_CONTEXT, context);
};

export const useTimeline = () => {
	const context = getContext<TimelineContextValue>(TIMELINE_CONTEXT);

	if (!context) {
		throw new Error('useTimeline must be used within a Timeline');
	}

	return context;
};
