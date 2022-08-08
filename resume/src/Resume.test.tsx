import TestRenderer, { ReactTestRenderer } from 'react-test-renderer';
import Resume from './Resume';

test('renders resume component', () => {
  const element: ReactTestRenderer = TestRenderer.create(<Resume />);
  expect(element).toBeDefined();
});
