"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function Swatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-md border"
        style={{ background: `var(${varName})` }}
      />
      <div className="text-xs">
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground">{varName}</div>
      </div>
    </div>
  )
}

function ScaleSwatch({ label, hex }: { label: string; hex: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-12 w-full rounded-md border" style={{ background: hex }} />
      <div className="text-xs">
        <div className="font-medium">{label}</div>
        <div className="text-muted-foreground">{hex}</div>
      </div>
    </div>
  )
}

const primaryScale = [
  ["50", "#eaf3fb"],
  ["100", "#d4e7f6"],
  ["200", "#aed3ed"],
  ["300", "#7fb6e0"],
  ["400", "#4a96d2"],
  ["500", "#0067b1"],
  ["600", "#00599a"],
  ["700", "#0b5494"],
  ["800", "#0a4378"],
  ["900", "#0b2238"],
]

const greyScale = [
  ["50", "#f7fafc"],
  ["100", "#f1f5f9"],
  ["200", "#e7edf2"],
  ["300", "#dbe3ea"],
  ["400", "#cdd8e1"],
  ["500", "#9aa9b5"],
  ["600", "#7d8d99"],
  ["700", "#5b6b78"],
  ["800", "#3a4a57"],
  ["900", "#16202b"],
]

export default function StyleguidePage() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "dark" : ""}>
      <div className="p-10 max-w-5xl mx-auto flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold">Design Tokens</h1>
            <p className="text-muted-foreground mt-1">
              Extracted from Manual Portal de Periódicos
            </p>
          </div>
          <Button variant="outline" onClick={() => setDark((d) => !d)}>
            Toggle {dark ? "Light" : "Dark"} Mode
          </Button>
        </div>

        {/* Color palette */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-semibold">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Swatch name="Background" varName="--background" />
            <Swatch name="Foreground" varName="--foreground" />
            <Swatch name="Card" varName="--card" />
            <Swatch name="Popover" varName="--popover" />
            <Swatch name="Primary" varName="--primary" />
            <Swatch name="Secondary" varName="--secondary" />
            <Swatch name="Muted" varName="--muted" />
            <Swatch name="Accent" varName="--accent" />
            <Swatch name="Destructive" varName="--destructive" />
            <Swatch name="Border" varName="--border" />
            <Swatch name="Input" varName="--input" />
            <Swatch name="Ring" varName="--ring" />
          </div>
        </section>

        {/* Primary scale */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-semibold">Primary Scale</h2>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
            {primaryScale.map(([label, hex]) => (
              <ScaleSwatch key={label} label={label} hex={hex} />
            ))}
          </div>
        </section>

        {/* Grey scale */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-semibold">Grey Scale</h2>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
            {greyScale.map(([label, hex]) => (
              <ScaleSwatch key={label} label={label} hex={hex} />
            ))}
          </div>
        </section>

        {/* Semantic colors */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-semibold">Semantic Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Swatch name="Success" varName="--success" />
            <Swatch name="Warning" varName="--warning" />
            <Swatch name="Info" varName="--info" />
            <Swatch name="Destructive" varName="--destructive" />
          </div>
        </section>

        {/* Typography */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-semibold">Typography</h2>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-heading font-extrabold">Heading 1 — Archivo 800</h1>
            <h2 className="text-3xl font-heading font-bold">Heading 2 — Archivo 700</h2>
            <h3 className="text-2xl font-heading font-semibold">Heading 3 — Archivo 600</h3>
            <h4 className="text-xl font-heading font-semibold">Heading 4 — Archivo 600</h4>
            <p className="text-base">
              Body text — Source Sans 3. The quick brown fox jumps over the lazy dog.
            </p>
            <p className="text-sm text-muted-foreground">
              Small / muted text — Source Sans 3.
            </p>
          </div>
        </section>

        {/* Border radius */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-semibold">Border Radius</h2>
          <div className="flex gap-4 flex-wrap">
            {["sm", "md", "lg", "xl", "2xl"].map((size) => (
              <div
                key={size}
                className={`h-20 w-20 bg-primary/10 border border-primary flex items-center justify-center text-xs rounded-${size}`}
              >
                {size}
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-semibold">Shadows</h2>
          <div className="flex gap-6 flex-wrap">
            <div className="h-20 w-32 rounded-lg bg-card border shadow-sm flex items-center justify-center text-xs">
              shadow-sm
            </div>
            <div className="h-20 w-32 rounded-lg bg-card border shadow-md flex items-center justify-center text-xs">
              shadow-md
            </div>
            <div className="h-20 w-32 rounded-lg bg-card border shadow-lg flex items-center justify-center text-xs">
              shadow-lg
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-heading font-semibold">Components</h2>

          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description using muted-foreground tokens.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Card content area.</p>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 max-w-md">
            <Alert>
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>Default alert using primary/info tokens.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Atenção</AlertTitle>
              <AlertDescription>Destructive alert for warnings/errors.</AlertDescription>
            </Alert>
          </div>

          <RadioGroup defaultValue="a" className="max-w-md">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="a" id="r-a" />
              <label htmlFor="r-a" className="text-sm">Option A</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="b" id="r-b" />
              <label htmlFor="r-b" className="text-sm">Option B</label>
            </div>
          </RadioGroup>
        </section>
      </div>
    </div>
  )
}
