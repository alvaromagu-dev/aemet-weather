import { FormEvent, FormEventHandler } from "react";
import { SearchInput } from "./SearchInput";

interface Props {
	onSubmit: FormEventHandler<HTMLFormElement>;
}

export function SearchBar({ onSubmit }: Props) {
	return (
		<>
			<form onSubmit={onSubmit}>
				<SearchInput />
			</form>
		</>
	)
}