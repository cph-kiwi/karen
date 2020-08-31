import React from "react";

export const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#2F2F2F"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
};

export function LinkedInIcon(props) {
  return (
    <svg width={44} height={44} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2.312 9.24h3.9v12.636h-3.9V9.24zM2 5.262c0-.624.217-1.153.65-1.586A2.2 2.2 0 014.262 3c.624 0 1.153.225 1.586.676.45.433.676.962.676 1.586a2.2 2.2 0 01-.676 1.612c-.433.433-.962.65-1.586.65a2.245 2.245 0 01-1.612-.65A2.245 2.245 0 012 5.262zM9.014 9.24h3.744v1.716h.052a3.16 3.16 0 01.52-.728c.225-.243.494-.46.806-.65.312-.19.667-.347 1.066-.468a4.447 4.447 0 011.3-.182c.988 0 1.785.156 2.392.468.607.295 1.075.71 1.404 1.248.347.537.58 1.17.702 1.898.121.728.182 1.517.182 2.366v6.968h-3.9v-6.188c0-.364-.017-.737-.052-1.118a3.143 3.143 0 00-.234-1.092 1.736 1.736 0 00-.598-.806c-.26-.208-.641-.312-1.144-.312-.503 0-.91.095-1.222.286a1.838 1.838 0 00-.728.728c-.156.295-.26.633-.312 1.014a8.85 8.85 0 00-.078 1.196v6.292h-3.9V9.24z"
        fill="#535353"
      />
    </svg>
  );
}

export const MessageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#2F2F2F"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="14" y2="13" />
    </svg>
  );
};

export const SendIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#2F2F2F"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="10" y1="14" x2="21" y2="3" />
      <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
    </svg>
  );
};
