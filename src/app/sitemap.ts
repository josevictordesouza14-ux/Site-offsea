import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap { return [{ url: company.website, priority: 1 }, { url: `${company.website}/quemsomos`, priority: 0.8 }, { url: `${company.website}/privacidade`, priority: 0.2 }]; }
