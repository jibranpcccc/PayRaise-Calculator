// Tree-shakable icon imports to reduce bundle size
import { 
  Calculator,
  TrendingUp,
  DollarSign,
  BarChart3,
  ArrowRight,
  Check,
  Star,
  Users,
  Clock,
  Target
} from "lucide-react";

// Export only the icons we actually use
export {
  Calculator,
  TrendingUp,
  DollarSign,
  BarChart3,
  ArrowRight,
  Check,
  Star,
  Users,
  Clock,
  Target
};

// Icon component that prevents importing unused icons
interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function OptimizedIcon({ name, size = 24, className = "" }: IconProps) {
  const icons = {
    calculator: Calculator,
    trending: TrendingUp,
    dollar: DollarSign,
    chart: BarChart3,
    arrow: ArrowRight,
    check: Check,
    star: Star,
    users: Users,
    clock: Clock,
    target: Target
  } as const;

  const IconComponent = icons[name as keyof typeof icons];
  
  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} className={className} />;
}