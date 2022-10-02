import {json, MetaFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

//** Types
import {RepositoryDTO} from "~/types";

//** Components
import Repository from "~/components/Repository";

//** Services
import repositoryService from "~/services/repository.service";

export const loader = async () => {
  const data = await repositoryService();

  return json(await data);
};

export const meta: MetaFunction = () => ({
  title: "@luscas - Repositories",
});

export default function Index() {
  const repos = useLoaderData();

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-5">
        {repos?.map((repo: RepositoryDTO) => <Repository key={repo.id} data={repo} />)}
      </div>
    </div>
  )
}