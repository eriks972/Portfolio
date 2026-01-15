export async function getLastCommitDate(repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/${repo}/commits?per_page=1`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data[0]?.commit?.committer?.date ?? null;
}
