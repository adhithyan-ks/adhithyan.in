<script lang="ts">
	import {
		Timeline,
		TimelineContent,
		TimelineDate,
		TimelineHeader,
		TimelineIndicator,
		TimelineItem,
		TimelineSeparator,
		TimelineTitle
	} from '$lib/components/ui/timeline';
	const items = [
		{
			date: 'Aug, 2023 - May, 2026 (Expected)',
			description:
				'Pursuing a diploma in computer engineering at Government Polytechnic College, Kunnamkulam, Kerala, India.',
			id: 1,
			title: 'Computer Engineering Diploma'
		},
		{
			date: 'May, 2025',
			description:
				'Completed one month of summer internship at GrapesGenix Pvt Ltd on MERN stack development.',
			id: 2,
			title: 'Internship at GrapesGenix Pvt Ltd'
		},
	];
</script>

<Timeline defaultValue={3}>
	{#each items as item (item.id)}
		<TimelineItem step={item.id}>
			<TimelineHeader>
				<TimelineSeparator />
				<TimelineTitle>{item.title}</TimelineTitle>
				<TimelineDate>{item.date}</TimelineDate>
				<TimelineIndicator />
			</TimelineHeader>
			<TimelineContent>{item.description}</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>
