import { Content, RichTextField } from "@prismicio/client";
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react";

import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { ReactNode } from "react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="sm" className="font-semibold text-center mb-4">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-center text-slate-600 mb-8">{children}</p>
  ),
};

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = {
  slice : {
    slice_type : string,
    variation : string,
    primary : {
      heading : RichTextField,
      body : RichTextField,
      button_link : string,
      button_text : ReactNode,
    } 

  }
}

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): ReactNode => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button >
          {slice.primary.button_text}
        </Button>
      </div>
    </Bounded>
  );
};

export default CallToAction;