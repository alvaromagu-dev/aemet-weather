import { SearchIcon } from "@/components/Icons";

export function SearchInput() {
	return (
		<div className="relative">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
				<SearchIcon />
			</div>
			<input type="text" className="w-full rounded-md p-3 outline-none border-2 			 border-transparent pl-11  text-gray-900 focus:ring-blue-500 focus:border-blue-500 bg-gray-200 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus-visible:border-blue-500 transition-colors" placeholder="Buscar..."></input>
		</div>
	)
}