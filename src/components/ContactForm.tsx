"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { UploadButton } from "@/utils/uploadthing";
import { supabase } from "@/lib/supabaseClient";
import { Textarea } from "./ui/textarea";
import { toast as toaster } from "./ui/use-toast";
import { Asterisk } from "lucide-react";

import toast from "react-hot-toast";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Email address is required.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Required",
  }),
  race: z.string().min(2, {
    message: "Required",
  }),
  address: z.string().min(2, {
    message: "Required",
  }),

  qualificationsApprentice: z.string().min(2, {
    message: "Required",
  }),

  qualificationsApprenticeSpecify: z.string().optional(),
  currentHairDresserSpecify: z.string().optional(),

  passionGrowth: z.string().min(2, {
    message: "Required",
  }),
  experienceYears: z.string().min(2, {
    message: "Required",
  }),

  dob: z.string().min(2, {
    message: "Required",
  }),

  socialMedia: z.string().min(2, {
    message: "Required",
  }),

  referenceName: z.string().min(2, {
    message: "Required",
  }),
  referenceEmail: z.string().min(2, {
    message: "Required",
  }),
  referenceNumber: z.string().min(2, {
    message: "Required",
  }),
  referenceRelationship: z.string().min(2, {
    message: "Required",
  }),
  referenceNameSecond: z.string().optional(),
  referenceEmailSecond: z.string().optional(),
  referenceNumberSecond: z.string().optional(),
  referenceRelationshipSecond: z.string().optional(),
  commitment: z.enum(["yes", "no"], {
    required_error: "You need to select.",
  }),

  tiktok: z.string().optional(),
  otherSocial: z.string().optional(),
  facebook: z.string().optional(),

  hearAboutRunaway: z.string().min(2, {
    message: "Required",
  }),
  whyAboutRunaway: z.string().min(2, {
    message: "Required",
  }),
  currentHairDresser: z.enum(["fulltime", "parttime"], {
    required_error: "You need to select.",
  }),
  videoUrl: z.string().min(2, {
    message: "Required",
  }),
  videoUrl2: z.string().optional(),
  videoUrl3: z.string().optional(),
  workArea: z.string(),
  whoyouare: z.string().optional(),
});

const ContactForm = () => {
  const [videoset, setVideoSet] = useState<string>("");
  const [videoset1, setVideoSet1] = useState<string>("");
  const [videoset2, setVideoSet2] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    try {
      const { data: insertedData, error } = await supabase
        .from("contact_form")
        .insert(values)
        .select();

      if (error) {
        throw error;
      }
      toast.success("Your entries are successfully submitted");
      toaster({
        description: "Contact successfully submitted",
      });
      setVideoSet("");
      window.location.reload();
      return insertedData;
    } catch (error) {
      toaster({
        variant: "destructive",
        description: "Error occured.",
      });
      console.error("Error inserting data:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  const raceEthnicityOptions = [
    { value: "black", label: "Black" },
    { value: "african", label: "African" },
    { value: "african_american", label: "African-American" },
    { value: "afro_descendant", label: "Afro-descendant" },
    { value: "aboriginal", label: "Aboriginal" },
    { value: "torres_strait_islander", label: "Torres Strait Islander" },
    { value: "indigenous_australian", label: "Indigenous Australian" },
    { value: "first_nations", label: "First Nations" },
    { value: "prefer_not_to_say", label: "Prefer not to say" },
    { value: "other", label: "Other" },
  ];

  const experienceOptions = [
    { value: "less_than_1_year", label: "Less than 1 year" },
    { value: "2_5_years", label: "2-5 years" },
    { value: "more_than_5_years", label: "More than 5 years " },
  ];

  const howDidYouHearOptions = [
    {
      value: "social_media",
      label: "Social Media (e.g., Facebook, Instagram, Twitter)",
    },
    { value: "online_ad", label: "Online Advertisement" },
    { value: "tv_commercial", label: "Television Commercial" },
    { value: "friends_family", label: "Friends or Family" },
    { value: "news_article_blog", label: "News Article or Blog" },
    { value: "email_newsletter", label: "Email Newsletter" },
    { value: "google_search", label: "Google Search" },
    { value: "other", label: "Other" },
  ];

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <h4 className="text-xl font-semibold ">Personal Information</h4>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  Full Name <Asterisk className="text-red-500 ml-1 h-4 w-4" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  Email Address{" "}
                  <Asterisk className="text-red-500 ml-1 h-4 w-4" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="" type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  Phone Number{" "}
                  <Asterisk className="text-red-500 ml-1 h-4 w-4" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="" type="tel" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  Business Address{" "}
                  <Asterisk className="text-red-500 ml-1 h-4 w-4" />
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  Date of Birth{" "}
                  <Asterisk className="text-red-500 ml-1 h-4 w-4" />
                </FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <br />

          <h4 className="text-xl font-semibold mt-8 mb-4">
            Identity Verification{" "}
          </h4>
          <FormField
            control={form.control}
            name="race"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  Do you identify as any of the following? (Select all that
                  apply)
                  <Asterisk className="text-red-500 ml-1 h-4 w-4" />
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {raceEthnicityOptions.map((item, i) => (
                      <SelectItem value={item.value} key={i}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <br />

          <h4 className="text-xl font-semibold mt-8 mb-4">
            Qualifications and Experience{" "}
          </h4>
          <FormField
            control={form.control}
            name="qualificationsApprentice"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="">
                  Do you have any hair qualifications - even if they aren&apos;t
                  Australian-based?<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row items-center  gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal flex gap-0">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal flex gap-0">
                        No
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="qualificationsApprenticeSpecify"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  If yes, please specify your qualifications (including
                  certifications):
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experienceYears"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" ">
                  How many years of experience do you have working as a hair
                  stylist?
                  <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {experienceOptions.map((item, i) => (
                      <SelectItem value={item.value} key={i}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <br />

          <h4 className="text-xl font-semibold mt-8 mb-4">
            Current Employment Status{" "}
          </h4>
          <FormField
            control={form.control}
            name="currentHairDresser"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className=" ">
                  Are you working as a full-time or a part-time hair stylist?
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row items-center  gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="fulltime" />
                      </FormControl>
                      <FormLabel className="font-normal flex gap-0">
                        Full Time
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="parttime" />
                      </FormControl>
                      <FormLabel className="font-normal flex gap-0">
                        Part Time
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentHairDresserSpecify"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  If part-time, please provide details of your other employment
                  (including whether you work from home):
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <h4 className="text-xl font-semibold mt-8 mb-4">Commitment </h4>

          <FormField
            control={form.control}
            name="commitment"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className=" ">
                  Are you able to commit to attending all eight intensive
                  workshops over the four-month period (both virtual and
                  physical workshops in Melbourne)?
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row items-center  gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal flex gap-0">
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal flex gap-0">
                        No
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />

          <h4 className="text-xl font-semibold mt-8 mb-4">
            Passion and Drive{" "}
          </h4>

          <FormField
            control={form.control}
            name="passionGrowth"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" ">
                  Describe your passion for hair styling and your commitment to
                  professional growth:
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <br />

          <h4 className="text-xl font-semibold mt-8 mb-4">
            Social Media Links{" "}
          </h4>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="socialMedia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" ">
                    Instagram
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tiktok"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" ">Tiktok</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" ">Facebook</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="otherSocial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" ">Others</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <br />

          <h4 className="text-xl font-semibold mt-8 mb-4">
            Portfolio Submission{" "}
          </h4>

          {/* kdkd */}

          <div className="space-y-4 ">
            <Label className=" ">
              Submit a 30 - 60 seconds video describing your passion for hair
              styling or your journey in hair styling
              <span className="text-red-500">*</span>
            </Label>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                setVideoSet(res[0]?.url);
                form.setValue("whoyouare", res[0]?.url);
                toast.success("Upload Completed");

                // alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
              className="border p-4 border-dashed border-black"
            />
            {videoset === "" ? (
              <FormField
                control={form.control}
                name="whoyouare"
                render={({ field }) => (
                  <FormItem>
                    <FormControl></FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <div>
                <p className="text-sm font-medium text-green-500">
                  1 Media Clip added.
                </p>
              </div>
            )}
          </div>
          <br />
          <div className="space-y-4 ">
            <Label className=" ">
              You must submit a 1 - 3 images showcasing your best work (Accepted
              format: PNG, JPEG)
              <span className="text-red-500">*</span>
            </Label>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log(res);
                setVideoSet2(res[0]?.url);
                form.setValue("videoUrl", res[0]?.url);
                if (res.length > 1) {
                  form.setValue("videoUrl2", res[1]?.url);
                }
                if (res.length > 2) {
                  form.setValue("videoUrl3", res[2]?.url);
                }
                toast.success("Upload Completed");

                // alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                console.log(error);
                alert(`ERROR! ${error.message}`);
              }}
              className="border p-4 border-dashed border-black"
            />
            {videoset2 === "" ? (
              <FormField
                control={form.control}
                name="videoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormControl></FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <div>
                <p className="text-sm font-medium text-green-500">
                  {" "}
                  Media Clips added.
                </p>
              </div>
            )}
          </div>
          <br />
          <div className="space-y-4 ">
            <Label className=" ">
              You must submit an image of where you do your work
              <span className="text-red-500">*</span>
            </Label>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                setVideoSet1(res[0]?.url);
                form.setValue("workArea", res[0]?.url);
                toast.success("Upload Completed");

                // alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                console.log(error);
                alert(`ERROR! ${error.message}`);
              }}
              className="border p-4 border-dashed border-black"
            />
            {videoset1 === "" ? (
              <FormField
                control={form.control}
                name="workArea"
                render={({ field }) => (
                  <FormItem>
                    <FormControl></FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <div>
                <p className="text-sm font-medium text-green-500">
                  1 Media Clip added.
                </p>
              </div>
            )}
          </div>
          <br />
          <h4 className="text-xl font-semibold mt-8 mb-4">
            References (can be longstanding client)
          </h4>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="referenceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-0 ">
                    Reference 1 Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referenceEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-0 ">
                    Reference 1 Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referenceNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-0 ">
                    Reference Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referenceRelationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-0 ">
                    Reference Relationship{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <br />
          <br />
          <div className="space-y-4">
            <p className="text-sm font-medium">Second Reference</p>
            <FormField
              control={form.control}
              name="referenceNameSecond"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-0 ">
                    Reference 2 Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referenceEmailSecond"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-0 ">
                    Reference 2 Email
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referenceNumberSecond"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-0 ">
                    Reference 2 Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referenceRelationshipSecond"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex gap-0 ">
                    Reference 2 Relationship
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <br />

          <h4 className="text-xl font-semibold mt-8 mb-4">
            Additional Information{" "}
          </h4>
          <FormField
            control={form.control}
            name="whyAboutRunaway"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  Why do you want to join Prostylist Academy?
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hearAboutRunaway"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-0 ">
                  How did you hear about Prostylist Academy?
                </FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {howDidYouHearOptions.map((item, i) => (
                      <SelectItem value={item.value} key={i}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <br />

          <div>
            <p className="font-semibold text-lg">
              Submit your application by 31st October to be considered for the
              2024 cohort.
            </p>
          </div>
          <br />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Submitting your application means you&apos;re okay with our Terms
              of Service, Privacy Policy.
            </Label>
          </div>
          <br />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-black rounded-lg w-full hover:bg-black/60 text-white"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                >
                  {" "}
                </svg>
                Processing...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
