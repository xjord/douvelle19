import { useRouter } from 'next/router';

import Button from '../src/components/Button';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="not-found">
      <div className="not-found-text">Oops, something went wrong</div>
      <div className="not-found-go-back">
        <Button onClick={() => router.back()}>Go back</Button>
      </div>
    </div>
  );
};

export default NotFound;
