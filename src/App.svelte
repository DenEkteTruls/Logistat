<script>
	import router from "page";
	import Navbar from "./Navbar.svelte";

	import Home from "./Home.svelte";
	import Login from "./Login.svelte";

	let page = Home;

	router("/", () => page = Home);
	router("/login", () => page = Login);
	
	router.start()
</script>


<svelte:component this={Navbar}/>
<svelte:component this={page}/>


<style>
</style>