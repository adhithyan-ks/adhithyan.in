<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
    const { title, date, description, techs, image, url } = $props<{
        title: string;
        date?: string;
        description: string;
        techs: string[];
        image: string;
        url: string;
    }>();
</script>

<Card.Root>
	<Card.Header>
		<img src={image} alt={title} class="w-full object-cover rounded-t-md" />
		<Card.Title class="mt-2">{title}</Card.Title>
		<Card.Description>
            {date}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>{description}</p>
        <div class="flex flex-wrap gap-2 mt-4">
			{#each techs as tech}
				<Badge variant="secondary">{tech}</Badge>
			{/each}
		</div>
	</Card.Content>
	<Card.Footer>
        
		<a href={url} target="_blank" rel="noopener noreferrer">
			<Button class="cursor-pointer">Source</Button>
		</a>
	</Card.Footer>
</Card.Root>