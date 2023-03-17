import { FormEvent } from "react";
import { SearchInput } from "./SearchInput";

export function SearchBar() {
	const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
	}
	return (
		<>
			<form onSubmit={onSubmit}>
				<SearchInput />
			</form>
		</>
	)
}