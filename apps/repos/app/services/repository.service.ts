const RepositoryService = async () => {
  return (await fetch("https://api.github.com/users/luscas/repos")).json();
}

export default RepositoryService;