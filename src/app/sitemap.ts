import type { MetadataRoute } from "next";
import { projectsList } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://altamounttdesign.com";
  const staticRoutes = ["", "/about", "/services", "/projects", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: (path === "" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: path === "" ? 1.0 : 0.8,
    })
  );

  const projectRoutes = projectsList.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
