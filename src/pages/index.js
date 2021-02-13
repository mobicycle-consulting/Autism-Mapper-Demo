import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
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
		<Section quarkly-title="Navigation" background="--color-grey">
			<Override slot="SectionContent" background="rgba(30, 98, 172, 0)" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Wellbeing Associates
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-greyD2"
			display="flex"
			flex-direction="column"
			quarkly-title="Body"
			margin="0 10px 0 0"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--lightD2"
				margin="0px"
				quarkly-title="Logline"
				border-color="#f6f3f3"
			>
				tools for autism diagnosis
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--darkL2"
				max-width="850px"
				quarkly-title="Title"
			>
				Autism Mapper
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" border-color="#f5efef" color="--lightD2">
						The mental health sector is experiencing a global shortage of specialist staff who have the capacity and training to carry out autism assessments.  For some trusts, hospitals and clinics, this shortage, coupled with the sheer volume of assessments, creates a bureaucratic nightmare for commissioners, psychiatrists and autism assessment teams.  Moreover, the processes in place around the five stages of assessment (referral, screening, waiting list, formal assessment, and feedback) are outdated, costly and redundant.{"  "}
						<br />
						<br />
						Staff shortages and process inefficiencies create a dilemma for staff. They are regularly forced to sacrifice clearing the assessment backlog in favour of attending to patients with acute mental health difficulties. In response to these challenges, Wellbeing Associates launched an app for practitioners, Autism Mapper, and created a platform for the sector, Autism Passport.
					</Text>
				</StackItem>
				<Image width="500px" src="https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/vector-creator(11).png?v=2021-02-13T14:56:27.489Z" />
			</Stack>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem
					width="50%"
					md-width="100%"
					hover-border-color="#278350"
					hover-border-width="10px"
					hover-margin="0 20px 0 2"
				>
					<StackItem>
						<Override slot="StackItemContent" border-width="2px" border-color="#f12424" />
						<Button
							quarkly-title="Sign In Button"
							background="rgba(0, 204, 0, 0.67)"
							margin="0 .5em 0 1"
							border-color="#085308"
							border-width=".1em"
							border-style="solid"
						>
							Register
						</Button>
						<Button
							margin="0 0 0 .2em"
							quarkly-title="Login Button"
							border-width=".1em"
							border-style="solid"
							border-color="#0b2c6d"
						>
							Login
						</Button>
					</StackItem>
				</StackItem>
			</Stack>
			<Hr />
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@autismmapper.app
			</Link>
		</Section>
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