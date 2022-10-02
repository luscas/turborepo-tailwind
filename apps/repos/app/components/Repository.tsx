import {RepositoryDTO} from "~/types";
import {formatDistance, subDays} from "date-fns";

export interface RepositoryProps {
  data: RepositoryDTO
}

const Repository = ({ data }: RepositoryProps) => {
  return (
    <a href={data.html_url} key={data.id} className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 flex justify-between items-center gap-5 text-gray-800">
      <img
        className="w-14 h-14 rounded-full"
        src={data.owner.avatar_url}
        alt={`@${data.owner.login}`}
      />

      <div className="flex-grow">
        <div>
          {data.full_name ?? data.name}
        </div>

        <div className="text-gray-500 font-semibold text-xs">
          Last updated <time>{formatDistance(subDays(new Date(data.updated_at), 3), new Date(), { addSuffix: true })}</time>
        </div>
      </div>
    </a>
  )
}

export default Repository
