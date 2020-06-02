/**
 *
 * Asynchronously loads the component for AdminInterface
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
