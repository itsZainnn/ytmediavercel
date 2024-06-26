import { TPostMetadata } from "@/types/blog";
import { calculateReadTime } from "@/utils/calculate-read-time";
import { getFormattedDate } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

type TBlogItemProps = {
	data: TPostMetadata;
};

export default function BlogItem({ data }: TBlogItemProps) {
	const { title, content, category, createdAt, slug, thumbnail } = data;

	return (
		<div className="blog-card card border-0">
			<div className="card-header border-0 bg-transparent ratio ratio-6x4 rounded overflow-hidden">
				<Link href={`/blogs/${slug}`} className="d-block">
					<Image
						src={thumbnail?.url || ""}
						alt={title}
						width={1080}
						height={720}
						className="img-fluid post-thumbnail w-full h-full object-cover"
					/>
				</Link>
			</div>
			<div className="card-body p-0 mt-6">
				<ul className="list-unstyled d-flex flex-wrap align-center fs-sm meta-list">
					<li>{category?.name}</li>
					<li>{getFormattedDate(createdAt)}</li>
					<li>{calculateReadTime(content)}</li>
				</ul>
				<h4 className="post-title fw-medium mb-0">
					<Link href={`/blogs/${slug}`}>{title}</Link>
				</h4>
			</div>
		</div>
	);
}
