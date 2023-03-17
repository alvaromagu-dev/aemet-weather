import { SearchBar } from "@/components/SearchBar"
import { FormEvent } from "react"

export default function Home() {
	const onSubmit = (evt: FormEvent) => {
		evt.preventDefault();
	}

  return (
    <main className="min-h-screen max-w-3xl m-auto p-5 justify-center">
			<SearchBar onSubmit={onSubmit} />
    </main>
  )
}
