import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Autism Mapper
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<meta name={"msapplication-TileColor"} content={"#134df4"} />
		</Helmet>
		<Components.Navigation />
		<Components.Body />
		<Components.Homejs quarkly-title="Footer" />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});