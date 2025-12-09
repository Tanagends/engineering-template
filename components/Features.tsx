"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Cpu } from "lucide-react";

const features = [
    {
        name: "Lightning Fast",
        description: "Optimized for speed with Next.js 15 and React Server Components.",
        icon: Zap,
    },
    {
        name: "Enterprise Security",
        description: "Bank-grade security standards built-in from the ground up.",
        icon: Shield,
    },
    {
        name: "Global Scale",
        description: "Deploy to the edge and reach users worldwide in milliseconds.",
        icon: Globe,
    },
    {
        name: "Modern Stack",
        description: "Built with the latest technologies: TypeScript, Tailwind, and more.",
        icon: Cpu,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Everything you need to ship
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A complete toolkit for engineering teams who demand the best.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/20"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{feature.name}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
