import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export const loader = async () => {
  const request = await fetch("https://api.github.com/users/luscas/repos");

  return json(await request.json());
};

interface Repository {
  id: number;
  html_url: string;
  full_name: string;
  name: string;
  updated_at: Date;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  }
}

export default function Index() {
  const repos = useLoaderData();

  return (
    <div className="p-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-5">
        {repos?.map((repo: Repository) => (
          <a href={repo.html_url} key={repo.id} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 flex justify-between items-center gap-5 text-gray-800">
            <img
              className="w-14 h-14 rounded-full"
              src={repo.owner.avatar_url}
              alt={`@${repo.owner.login}`}
            />

            <div className="flex-grow">
              <div>
                {repo.full_name ?? repo.name}
              </div>

              <div className="text-gray-500 font-semibold text-xs">
                Last updated <time>{formatDistance(subDays(new Date(repo.updated_at), 3), new Date(), { addSuffix: true })}</time>
              </div>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
}
