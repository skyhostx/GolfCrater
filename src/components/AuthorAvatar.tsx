import React, { useState } from 'react';
import { User } from 'lucide-react';

interface AuthorAvatarProps {
  src: string;
  name: string;
  className?: string;
}

export const AuthorAvatar: React.FC<AuthorAvatarProps> = ({
  src,
  name,
  className = 'w-8 h-8 rounded-full border border-slate-200',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs uppercase shrink-0 ${className}`}
        title={name}
      >
        <User className="w-1/2 h-1/2 text-slate-400" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={`object-cover shrink-0 ${className}`}
    />
  );
};
