"use client"

// ===== IMPORTS =====
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Calendar,
  Mail,
  Globe,
  Users,
  Heart,
  MessageCircle,
  Settings,
  Edit3,
  Youtube,
  X,
  Check,
} from "lucide-react"

// ===== TYPES =====
interface UserProfile {
  name: string
  username: string
  bio: string
  location: string
  joinDate: string
  email: string
  phone: string
  website: string
  followers: number
  following: number
  posts: number
  likes: number
  avatar: string
  coverImage: string
  skills: string[]
  isFollowing: boolean
}

// ===== MOCK DATA =====
const mockUser: UserProfile = {
  name: "Diecast by Dollar",
  username: "@DiecastByDollar",
  bio: "Hey I'm Dollar Gill! 🚗 I collect Hot Wheels, Jada, Matchbox, Maisto, Pink Slips and other diecast cars. Passionate about miniature automotive art! 🏎️✨",
  location: "Sydney, Australia",
  joinDate: "August 2025",
  email: "hi@diecastbydollar.com",
  phone: "+1 (555) 123-4567",
  website: "www.DiecastByDollar.com",
  followers: 2847,
  following: 892,
  posts: 156,
  likes: 12400,
  avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21616217_90.jpg-YQw7j36MOYnX34E2mXOCDDXrwsk2Wz.jpeg",
  coverImage: "/abstract-design-pattern.png",
  skills: ["Hot Wheels", "Maisto", "Matchbox", "Jada", "Pink Slips"],
  isFollowing: false,
}

// ===== MAIN COMPONENT =====
export default function CardWeb() {
  // ===== STATE =====
  const [user, setUser] = useState<UserProfile>(mockUser)
  const [isLoading, setIsLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [editForm, setEditForm] = useState(mockUser)

  // ===== EVENT HANDLERS =====
  const handleFollow = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser((prev) => ({ ...prev, isFollowing: !prev.isFollowing }))
    setIsLoading(false)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditForm(user)
  }

  const handleSave = () => {
    setUser(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditForm(user)
    setIsEditing(false)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  return (
    <div className="w-[420px] max-w-[420px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.01] hover:bg-white/8 hover:border-white/20 shadow-2xl">
      {/* ===== PROFILE CONTENT ===== */}
      <div className="p-6 space-y-5">
        {/* ===== AVATAR AND BASIC INFO ===== */}
        <div className="relative mb-3">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-24 h-24 rounded-2xl border-3 border-white/30 bg-white/10 backdrop-blur-xl shadow-lg object-cover"
              />
              <Button
                size="sm"
                className="absolute -bottom-0.5 -right-0.5 w-7 h-7 rounded-full bg-blue-500 hover:bg-blue-600 border-2 border-white/30 p-0 transition-all duration-300 shadow-md"
              >
                <Edit3 className="h-3 w-3 text-white" />
              </Button>
            </div>

            {/* Name, Username, and YouTube Button */}
            <div className="flex-1 space-y-2">
              <div className="space-y-1">
                {isEditing ? (
                  <div className="space-y-2">
                    <Input
                      value={editForm.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditForm({ ...editForm, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg font-semibold"

                      placeholder="Name"
                    />
                    <Input
                      value={editForm.username}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditForm({ ...editForm, username: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm"
                      placeholder="Username"
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="text-xl font-semibold text-white leading-tight">{user.name}</h1>
                    <p className="text-white/70 text-sm font-medium">{user.username}</p>
                  </>
                )}
              </div>

              <Button
                asChild
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] shadow-md text-xs px-3 py-1.5 h-auto"
              >
                <a href="https://www.youtube.com/@diecastbydollar" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-3 w-3 mr-1.5" />
                  Subscribe to YouTube
                </a>
              </Button>
            </div>
          </div>

          {/* Settings Button */}
          <div className="absolute top-0 right-0">
            {isEditing ? (
              <div className="flex gap-1">
                <Button
                  size="sm"
                  onClick={handleSave}
                  className="bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <Check className="h-4 w-4 text-green-400" />
                </Button>
                <Button
                  size="sm"
                  onClick={handleCancel}
                  className="bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <X className="h-4 w-4 text-red-400" />
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                onClick={handleEdit}
                className="bg-black/20 hover:bg-black/30 border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                <Settings className="h-4 w-4 text-white" />
              </Button>
            )}
          </div>
        </div>

        {/* ===== BIO ===== */}
        {isEditing ? (
          <Textarea
            value={editForm.bio}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditForm({ ...editForm, bio: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm leading-relaxed resize-none"
            placeholder="Bio"
            rows={3}
          />
        ) : (
          <p className="text-white/85 text-sm leading-relaxed">{user.bio}</p>
        )}

        {/* ===== SKILLS ===== */}
        <div className="flex flex-wrap gap-1.5">
          {isEditing ? (
            <div className="w-full">
              <Input
                value={editForm.skills.join(", ")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEditForm({ ...editForm, skills: e.target.value.split(", ").filter((s) => s.trim()) })
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm"
                placeholder="Skills (comma separated)"
              />
            </div>
          ) : (
            user.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-100 text-xs px-2.5 py-1 transition-all duration-300 font-medium"
              >
                {skill}
              </Badge>
            ))
          )}
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-4 gap-3 py-2">
          <div className="text-center space-y-1">
            <p className="text-white font-semibold text-base">{formatNumber(user.posts)}</p>
            <p className="text-white/60 text-xs font-medium">Posts</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-white font-semibold text-base">{formatNumber(user.followers)}</p>
            <p className="text-white/60 text-xs font-medium">Followers</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-white font-semibold text-base">{formatNumber(user.following)}</p>
            <p className="text-white/60 text-xs font-medium">Following</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-white font-semibold text-base">{formatNumber(user.likes)}</p>
            <p className="text-white/60 text-xs font-medium">Likes</p>
          </div>
        </div>

        {/* ===== CONTACT INFO ===== */}
        <div className="space-y-2.5 bg-white/5 rounded-xl p-4 border border-white/10">
          {isEditing ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <Input
                  value={editForm.location}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditForm({ ...editForm, location: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm flex-1"
                  placeholder="Location"
                />
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <Input
                  value={editForm.joinDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditForm({ ...editForm, joinDate: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm flex-1"
                  placeholder="Join Date"
                />
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <Input
                  value={editForm.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditForm({ ...editForm, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm flex-1"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <Input
                  value={editForm.website}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditForm({ ...editForm, website: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm flex-1"
                  placeholder="Website"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 text-white/85 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="font-medium">{user.location}</span>
              </div>
              <div className="flex items-center gap-3 text-white/85 text-sm">
                <Calendar className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="font-medium">Joined {user.joinDate}</span>
              </div>
              <div className="flex items-center gap-3 text-white/85 text-sm">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="font-medium">{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-white/85 text-sm">
                <Globe className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="font-medium">{user.website}</span>
              </div>
            </>
          )}
        </div>

        {/* ===== ACTION BUTTONS ===== */}
        <div className="flex gap-2.5 pt-1">
          <Button
            onClick={handleFollow}
            disabled={isLoading}
            className="flex-1 bg-blue-500 hover:bg-blue-600 border-0 text-white font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            {isLoading ? <Users className="h-4 w-4 animate-spin mr-2" /> : <Users className="h-4 w-4 mr-2" />}
            {user.isFollowing ? "Following" : "Follow"}
          </Button>

          <Button className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 hover:scale-[1.02] shadow-md">
            <MessageCircle className="h-4 w-4" />
          </Button>

          <Button
            onClick={handleLike}
            className={`bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 hover:scale-[1.02] shadow-md ${isLiked ? "bg-red-500/20 border-red-400/30" : ""}`}
          >
            <Heart className={`h-4 w-4 transition-colors duration-300 ${isLiked ? "fill-red-400 text-red-400" : ""}`} />
          </Button>
        </div>
      </div>
    </div>
  )
}
