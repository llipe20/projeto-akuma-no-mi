<template>
    <div class="flex justify-between items-center w-full h-20 text-white pr-8 pl-10 max-md:justify-end">
        <div class="flex justify-center items-center gap-10 h-full max-md:hidden">
            <a href="#" class="hover:border-b">Movies</a>
            <a href="#" class="hover:border-b">Series</a>
            <a href="#" class="hover:border-b">Documentaries</a>
        </div>

        <div class="flex items-center gap-10 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-95 hover:scale-110">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 scale-95 hover:scale-110">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>

            <span class="h-10 w-10 rounded-full bg-white"></span>
        </div>
    </div>
</template>

<script>
export default {
    name : 'NavGation'
}
</script>