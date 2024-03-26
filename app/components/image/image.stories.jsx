import { Image } from '~/components/image';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Image',
};

const imageData = {
  alt: 'An assortment of geometric blue shapes.',
  src: '/static/hello-world-banner.jpg',
  width: 960,
  height: 540,
  placeholder: '/static/hello-world-banner-placeholder.jpg',
};

const Story = args => (
  <StoryContainer>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0px, 960px)' }}>
      <Image alt="An assortment of geometric blue shapes." {...imageData} {...args} />
    </div>
  </StoryContainer>
);

export const Default = Story.bind({});

Default.args = {
  ...imageData,
};

export const Reveal = Story.bind({});

Reveal.args = {
  ...imageData,
  reveal: true,
};
