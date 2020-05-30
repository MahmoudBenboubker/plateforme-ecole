/**
 *
 * Asynchronously loads the component for CoursCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
