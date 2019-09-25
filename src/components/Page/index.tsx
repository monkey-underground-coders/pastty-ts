import { useEffect } from "react";

interface PageProps {
  title: string;
  children: any;
}

export default ({ title, children }: PageProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return children;
};
