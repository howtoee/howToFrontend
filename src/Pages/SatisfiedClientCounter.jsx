import React from 'react';
import { motion } from 'framer-motion';

const SatisfiedClientCounter = ({ data, isInView }) => {
    if (!data) return null;

    return (
        <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center space-x-4 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="flex -space-x-3 overflow-hidden">
                {data.avatars && data.avatars.map((avatar, index) => (
                    <motion.img
                        key={index}
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                        src={avatar}
                        alt={`Client ${index + 1}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    />
                ))}
            </div>
            <div>
                <motion.p
                    className="text-2xl font-bold text-white leading-none"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {data.count.toLocaleString()}+
                </motion.p>
                <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
                    {data.label}
                </p>
            </div>
        </motion.div>
    );
};

export default SatisfiedClientCounter;
