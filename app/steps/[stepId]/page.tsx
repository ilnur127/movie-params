'use client';

import StepsComponent from '@/pages/steps';
import { useParams } from 'next/navigation';

export default function StepsPage() {
  const params = useParams();

  return <StepsComponent stepId={params?.stepId as string} />;
}
