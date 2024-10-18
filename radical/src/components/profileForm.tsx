"use client"

import {  z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Dealer, DealerResponse } from "@/app/actions/getDealers"
import { useState } from "react"
import { futuraPTBold, futuraPTBook } from "@/app/fonts/fonts"

const profileFormSchema = z.object({
  fullName: z.string().min(1, {
    message: "Please enter your name.",
  }).max(50),
  email: z.string().email(),
  country: z.string().min(2, {
    message: "Please select a country.",
  }).max(50),
  dealerId: z.string().min(2, {
    message: "Please select the dealer you purchased from.",
  }).max(50),
  radicalOwned: z.string().min(2, {
    message: "Please select the radical you own.",
  }).max(50),
  yearOfPurchase: z.string().optional(),
  chassisNumber: z.number({
    message: "Please enter a valid chassis number.",
  }).optional(),
})



export function ProfileForm({
  dealers
}: {
  dealers: DealerResponse
}) {
  const processedDealers: { title: string, id: string }[] = dealers?.results?.map((dealer: Dealer) => ({ title: dealer?.title, id: dealer.id })) || []
  const [submittedValues, setSubmittedValues] = useState<z.infer<typeof profileFormSchema> | null>(null)

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "JosephineRobinson",
      email: "j.robertson@gmail.com",
      country: "Australia",
      dealerId: "",
      radicalOwned: "",
      yearOfPurchase: "2006",
      chassisNumber: 234455,
    },
  })

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    setSubmittedValues(values)
  }




  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`text-radicalGray ${futuraPTBook.className}`}>
        {submittedValues && (

          <ul>
            {Object.entries(submittedValues).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>

        )}

        <div className="grid-cols-2 grid gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Australia">Australia</SelectItem>
                        <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dealerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dealer</FormLabel>
                <FormControl>
                  <Select disabled={processedDealers.length === 0} onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Dealer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {processedDealers?.map((dealer) => (
                          <SelectItem key={dealer.id} value={dealer.id}>{dealer.title}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="radicalOwned"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which Radical do you own?</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a radical" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="SR1">SR1</SelectItem>
                          <SelectItem value="SR3">SR3</SelectItem>
                          <SelectItem value="SR10">SR10</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="yearOfPurchase"
            render={({ field }) => (
              <FormItem>
                <div className="w-full flex justify-between items-center">
                  <FormLabel>Year of purchase</FormLabel>
                  <p className="text-xs">Optional</p>
                </div>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chassisNumber"
            render={({ field }) => (
              <FormItem>
                <div className="w-full flex justify-between items-center">
                  <FormLabel>Chassis Number</FormLabel>
                  <p className="text-xs">Optional</p>
                </div>
                <FormControl>
                  <Input type="number" placeholder="" {...field}  {...form.register("chassisNumber", {
                    valueAsNumber: true,
                  })} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className={`mt-6 bg-gradient-to-br from-radical to-[#FF9900] text-black ${futuraPTBold.className}`}>Save Profile</Button>
      </form>
    </Form>
  )
}

