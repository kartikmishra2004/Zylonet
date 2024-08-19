import { formatDistanceToNow } from 'date-fns';

const timeAgo = (timestamp) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};

export default timeAgo;
