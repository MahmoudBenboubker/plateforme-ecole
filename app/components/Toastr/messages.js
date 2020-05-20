/*
 * Toastr Messages
 *
 * This contains all the text for the Toastr component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Toastr';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Toastr component!',
  },
});
