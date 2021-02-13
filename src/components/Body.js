import React from "react";
import { useOverrides, StackItem, Stack, Override, Section } from "@quarkly/components";
import { Text, Image, Button, Hr } from "@quarkly/widgets";
const defaultProps = {
	"padding": "60px 0",
	"sm-padding": "40px 0",
	"min-height": "600px",
	"sm-min-height": "auto",
	"background": "--color-greyD2",
	"display": "flex",
	"flex-direction": "column",
	"quarkly-title": "Body",
	"margin": "0 10px 0 0"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"text-transform": "uppercase",
			"letter-spacing": "1px",
			"max-width": "850px",
			"color": "--lightD2",
			"margin": "0px",
			"quarkly-title": "Logline",
			"border-color": "#f6f3f3",
			"children": "tools for autism diagnosis"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"margin": "8px 0px 32px",
			"font": "--headline1",
			"md-font": "--headline2",
			"color": "--darkL2",
			"max-width": "850px",
			"quarkly-title": "Title",
			"children": "Autism Mapper"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"margin-top": "auto",
			"color": "--grey",
			"font": "--base"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"md-width": "100%"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px",
			"border-color": "#f5efef",
			"color": "--lightD2",
			"children": <>
				The mental health sector is experiencing a global shortage of specialist staff who have the capacity and training to carry out autism assessments.  For some trusts, hospitals and clinics, this shortage, coupled with the sheer volume of assessments, creates a bureaucratic nightmare for commissioners, psychiatrists and autism assessment teams.  Moreover, the processes in place around the five stages of assessment (referral, screening, waiting list, formal assessment, and feedback) are outdated, costly and redundant.{"  "}
				<br />
				<br />
				Staff shortages and process inefficiencies create a dilemma for staff. They are regularly forced to sacrifice clearing the assessment backlog in favour of attending to patients with acute mental health difficulties. In response to these challenges, Wellbeing Associates launched an app for practitioners, Autism Mapper, and created a platform for the sector, Autism Passport.
			</>
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "500px",
			"src": "https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/vector-creator(11).png?v=2021-02-13T14:56:27.489Z"
		}
	},
	"stack1": {
		"kind": "Stack",
		"props": {
			"margin-top": "auto",
			"color": "--grey",
			"font": "--base"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"md-width": "100%",
			"hover-border-color": "#278350",
			"hover-border-width": "10px",
			"hover-margin": "0 20px 0 2"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-width": "2px",
			"border-color": "#f12424"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"quarkly-title": "Button",
			"background": "rgba(173, 218, 15, 0.67)",
			"margin": "0 .5em 0 1",
			"border-color": "#085308",
			"border-width": ".1em",
			"border-style": "solid",
			"children": "Get Started"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	}
};

const Body = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Text {...override("text2")} />
			</StackItem>
			<Image {...override("image")} />
		</Stack>
		<Stack {...override("stack1")}>
			<StackItem {...override("stackItem1")}>
				<StackItem {...override("stackItem2")}>
					<Override {...override("stackItemOverride")} />
					<Button {...override("button")} />
				</StackItem>
			</StackItem>
		</Stack>
		<Hr {...override("hr")} />
		{children}
	</Section>;
};

Object.assign(Body, { ...Section,
	defaultProps,
	overrides
});
export default Body;