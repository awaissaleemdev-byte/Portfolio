"use server";

import { improveBio, type ImproveBioInput } from '@/ai/flows/ai-powered-bio-improvement';

export async function getImprovedBio(input: ImproveBioInput) {
  try {
    const result = await improveBio(input);
    return { success: true, bio: result.refinedBio };
  } catch (error) {
    console.error('Error improving bio:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to generate bio. ${errorMessage}` };
  }
}
