/**
 *
 * Asynchronously loads the component for CoursInterface
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
