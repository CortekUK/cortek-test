export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      app_user_roles: {
        Row: {
          auth_user_id: string
          client_id: string | null
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
        }
        Insert: {
          auth_user_id: string
          client_id?: string | null
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Update: {
          auth_user_id?: string
          client_id?: string | null
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "app_user_roles_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_branding: {
        Row: {
          client_id: string
          created_at: string
          id: string
          logo_filename: string | null
          logo_url: string | null
          updated_at: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: string
          logo_filename?: string | null
          logo_url?: string | null
          updated_at?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: string
          logo_filename?: string | null
          logo_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      client_preferences: {
        Row: {
          client_id: string
          created_at: string
          emoji_style: string | null
          id: string
          preferred_send_days: string[] | null
          preferred_send_time_range: string | null
          sms_enabled: boolean
          social_media_enabled: boolean
          tone: string | null
          updated_at: string
          whatsapp_enabled: boolean
        }
        Insert: {
          client_id: string
          created_at?: string
          emoji_style?: string | null
          id?: string
          preferred_send_days?: string[] | null
          preferred_send_time_range?: string | null
          sms_enabled?: boolean
          social_media_enabled?: boolean
          tone?: string | null
          updated_at?: string
          whatsapp_enabled?: boolean
        }
        Update: {
          client_id?: string
          created_at?: string
          emoji_style?: string | null
          id?: string
          preferred_send_days?: string[] | null
          preferred_send_time_range?: string | null
          sms_enabled?: boolean
          social_media_enabled?: boolean
          tone?: string | null
          updated_at?: string
          whatsapp_enabled?: boolean
        }
        Relationships: []
      }
      client_profiles: {
        Row: {
          business_name: string
          city: string
          client_id: string
          country: string
          created_at: string
          id: string
          industry: string
          updated_at: string
        }
        Insert: {
          business_name: string
          city: string
          client_id: string
          country: string
          created_at?: string
          id?: string
          industry: string
          updated_at?: string
        }
        Update: {
          business_name?: string
          city?: string
          client_id?: string
          country?: string
          created_at?: string
          id?: string
          industry?: string
          updated_at?: string
        }
        Relationships: []
      }
      client_setup_status: {
        Row: {
          business_info_complete: boolean
          client_id: string
          created_at: string
          id: string
          logo_uploaded: boolean
          preferences_set: boolean
          products_selected: boolean
          setup_complete: boolean | null
          updated_at: string
          whatsapp_connected: boolean
        }
        Insert: {
          business_info_complete?: boolean
          client_id: string
          created_at?: string
          id?: string
          logo_uploaded?: boolean
          preferences_set?: boolean
          products_selected?: boolean
          setup_complete?: boolean | null
          updated_at?: string
          whatsapp_connected?: boolean
        }
        Update: {
          business_info_complete?: boolean
          client_id?: string
          created_at?: string
          id?: string
          logo_uploaded?: boolean
          preferences_set?: boolean
          products_selected?: boolean
          setup_complete?: boolean | null
          updated_at?: string
          whatsapp_connected?: boolean
        }
        Relationships: []
      }
      client_whatsapp_config: {
        Row: {
          client_id: string
          court_event_subtypes: string[] | null
          created_at: string
          group_chat_id: string
          id: string
          updated_at: string
        }
        Insert: {
          client_id: string
          court_event_subtypes?: string[] | null
          created_at?: string
          group_chat_id: string
          id?: string
          updated_at?: string
        }
        Update: {
          client_id?: string
          court_event_subtypes?: string[] | null
          created_at?: string
          group_chat_id?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      clients: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      insights: {
        Row: {
          author: string
          body_content: string
          created_at: string
          id: string
          is_published: boolean | null
          meta_description: string | null
          published_date: string
          slug: string
          summary: string
          thumbnail_url: string
          title: string
          updated_at: string
          view_count: number | null
        }
        Insert: {
          author: string
          body_content: string
          created_at?: string
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          published_date: string
          slug: string
          summary: string
          thumbnail_url: string
          title: string
          updated_at?: string
          view_count?: number | null
        }
        Update: {
          author?: string
          body_content?: string
          created_at?: string
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          published_date?: string
          slug?: string
          summary?: string
          thumbnail_url?: string
          title?: string
          updated_at?: string
          view_count?: number | null
        }
        Relationships: []
      }
      manual_sends: {
        Row: {
          automation_type: string
          client_id: string
          created_at: string
          cta_link: string | null
          id: string
          image_url: string | null
          message_body: string
          message_opening: string | null
          mock_mode: boolean
          product: string
          scheduled_at: string | null
          sent_at: string | null
          updated_at: string
        }
        Insert: {
          automation_type: string
          client_id: string
          created_at?: string
          cta_link?: string | null
          id?: string
          image_url?: string | null
          message_body: string
          message_opening?: string | null
          mock_mode?: boolean
          product?: string
          scheduled_at?: string | null
          sent_at?: string | null
          updated_at?: string
        }
        Update: {
          automation_type?: string
          client_id?: string
          created_at?: string
          cta_link?: string | null
          id?: string
          image_url?: string | null
          message_body?: string
          message_opening?: string | null
          mock_mode?: boolean
          product?: string
          scheduled_at?: string | null
          sent_at?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      sms_automation_settings: {
        Row: {
          client_id: string
          created_at: string | null
          npr_active_days: string[] | null
          npr_active_hours: string | null
          npr_body: string | null
          npr_cooldown_days: number | null
          npr_cta_link: string | null
          npr_dedupe: boolean | null
          npr_delay: string | null
          npr_enabled: boolean | null
          npr_quiet: boolean | null
          npr_quiet_hours: string | null
          npr_review_link: string | null
          pr_active_days: string[] | null
          pr_active_hours: string | null
          pr_audience: string | null
          pr_body: string | null
          pr_cta_link: string | null
          pr_enabled: boolean | null
          pr_frequency: string | null
          pr_month_day: number | null
          pr_quiet: boolean | null
          pr_quiet_hours: string | null
          pr_time: string | null
          pr_weekday: string | null
          updated_at: string | null
        }
        Insert: {
          client_id: string
          created_at?: string | null
          npr_active_days?: string[] | null
          npr_active_hours?: string | null
          npr_body?: string | null
          npr_cooldown_days?: number | null
          npr_cta_link?: string | null
          npr_dedupe?: boolean | null
          npr_delay?: string | null
          npr_enabled?: boolean | null
          npr_quiet?: boolean | null
          npr_quiet_hours?: string | null
          npr_review_link?: string | null
          pr_active_days?: string[] | null
          pr_active_hours?: string | null
          pr_audience?: string | null
          pr_body?: string | null
          pr_cta_link?: string | null
          pr_enabled?: boolean | null
          pr_frequency?: string | null
          pr_month_day?: number | null
          pr_quiet?: boolean | null
          pr_quiet_hours?: string | null
          pr_time?: string | null
          pr_weekday?: string | null
          updated_at?: string | null
        }
        Update: {
          client_id?: string
          created_at?: string | null
          npr_active_days?: string[] | null
          npr_active_hours?: string | null
          npr_body?: string | null
          npr_cooldown_days?: number | null
          npr_cta_link?: string | null
          npr_dedupe?: boolean | null
          npr_delay?: string | null
          npr_enabled?: boolean | null
          npr_quiet?: boolean | null
          npr_quiet_hours?: string | null
          npr_review_link?: string | null
          pr_active_days?: string[] | null
          pr_active_hours?: string | null
          pr_audience?: string | null
          pr_body?: string | null
          pr_cta_link?: string | null
          pr_enabled?: boolean | null
          pr_frequency?: string | null
          pr_month_day?: number | null
          pr_quiet?: boolean | null
          pr_quiet_hours?: string | null
          pr_time?: string | null
          pr_weekday?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sms_settings: {
        Row: {
          active_hours: string | null
          body: string
          client_id: string
          created_at: string
          cta_link: string | null
          enabled: boolean | null
          preferred_days: string[] | null
          quiet: boolean | null
          quiet_hours: string | null
          updated_at: string
        }
        Insert: {
          active_hours?: string | null
          body?: string
          client_id: string
          created_at?: string
          cta_link?: string | null
          enabled?: boolean | null
          preferred_days?: string[] | null
          quiet?: boolean | null
          quiet_hours?: string | null
          updated_at?: string
        }
        Update: {
          active_hours?: string | null
          body?: string
          client_id?: string
          created_at?: string
          cta_link?: string | null
          enabled?: boolean | null
          preferred_days?: string[] | null
          quiet?: boolean | null
          quiet_hours?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_settings_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      socials_assets: {
        Row: {
          automation: string
          client_id: string
          created_at: string
          filename: string
          height: number | null
          id: string
          in_pool: boolean
          last_used: string | null
          path: string
          size_bytes: number
          status: string
          updated_at: string
          usage_count: number
          width: number | null
        }
        Insert: {
          automation: string
          client_id: string
          created_at?: string
          filename: string
          height?: number | null
          id?: string
          in_pool?: boolean
          last_used?: string | null
          path: string
          size_bytes: number
          status?: string
          updated_at?: string
          usage_count?: number
          width?: number | null
        }
        Update: {
          automation?: string
          client_id?: string
          created_at?: string
          filename?: string
          height?: number | null
          id?: string
          in_pool?: boolean
          last_used?: string | null
          path?: string
          size_bytes?: number
          status?: string
          updated_at?: string
          usage_count?: number
          width?: number | null
        }
        Relationships: []
      }
      socials_images: {
        Row: {
          client_id: string
          content_type: string
          created_at: string | null
          file_size: number
          file_url: string
          filename: string
          id: string
          is_reusable: boolean | null
          updated_at: string | null
          usage_count: number | null
        }
        Insert: {
          client_id: string
          content_type: string
          created_at?: string | null
          file_size: number
          file_url: string
          filename: string
          id?: string
          is_reusable?: boolean | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Update: {
          client_id?: string
          content_type?: string
          created_at?: string | null
          file_size?: number
          file_url?: string
          filename?: string
          id?: string
          is_reusable?: boolean | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "socials_images_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      socials_settings: {
        Row: {
          client_id: string
          court_active_days: string[] | null
          court_active_hours: string | null
          court_body: string | null
          court_cooldown: string | null
          court_cta_link: string | null
          court_enabled: boolean | null
          court_lookahead: string | null
          court_quiet: boolean | null
          court_quiet_hours: string | null
          court_random_image: boolean | null
          court_repeat_every: string | null
          court_repeat_max: number | null
          court_selected_image: string | null
          court_text_position: string | null
          court_threshold: number | null
          court_trigger_mode: string | null
          court_whatsapp_number: string | null
          created_at: string | null
          event_active_days: string[] | null
          event_active_hours: string | null
          event_body: string | null
          event_cooldown: string | null
          event_cta_link: string | null
          event_enabled: boolean | null
          event_lookahead: string | null
          event_quiet: boolean | null
          event_quiet_hours: string | null
          event_random_image: boolean | null
          event_repeat_every: string | null
          event_repeat_max: number | null
          event_selected_image: string | null
          event_text_position: string | null
          event_threshold: number | null
          event_trigger_mode: string | null
          event_whatsapp_number: string | null
          updated_at: string | null
        }
        Insert: {
          client_id: string
          court_active_days?: string[] | null
          court_active_hours?: string | null
          court_body?: string | null
          court_cooldown?: string | null
          court_cta_link?: string | null
          court_enabled?: boolean | null
          court_lookahead?: string | null
          court_quiet?: boolean | null
          court_quiet_hours?: string | null
          court_random_image?: boolean | null
          court_repeat_every?: string | null
          court_repeat_max?: number | null
          court_selected_image?: string | null
          court_text_position?: string | null
          court_threshold?: number | null
          court_trigger_mode?: string | null
          court_whatsapp_number?: string | null
          created_at?: string | null
          event_active_days?: string[] | null
          event_active_hours?: string | null
          event_body?: string | null
          event_cooldown?: string | null
          event_cta_link?: string | null
          event_enabled?: boolean | null
          event_lookahead?: string | null
          event_quiet?: boolean | null
          event_quiet_hours?: string | null
          event_random_image?: boolean | null
          event_repeat_every?: string | null
          event_repeat_max?: number | null
          event_selected_image?: string | null
          event_text_position?: string | null
          event_threshold?: number | null
          event_trigger_mode?: string | null
          event_whatsapp_number?: string | null
          updated_at?: string | null
        }
        Update: {
          client_id?: string
          court_active_days?: string[] | null
          court_active_hours?: string | null
          court_body?: string | null
          court_cooldown?: string | null
          court_cta_link?: string | null
          court_enabled?: boolean | null
          court_lookahead?: string | null
          court_quiet?: boolean | null
          court_quiet_hours?: string | null
          court_random_image?: boolean | null
          court_repeat_every?: string | null
          court_repeat_max?: number | null
          court_selected_image?: string | null
          court_text_position?: string | null
          court_threshold?: number | null
          court_trigger_mode?: string | null
          court_whatsapp_number?: string | null
          created_at?: string | null
          event_active_days?: string[] | null
          event_active_hours?: string | null
          event_body?: string | null
          event_cooldown?: string | null
          event_cta_link?: string | null
          event_enabled?: boolean | null
          event_lookahead?: string | null
          event_quiet?: boolean | null
          event_quiet_hours?: string | null
          event_random_image?: boolean | null
          event_repeat_every?: string | null
          event_repeat_max?: number | null
          event_selected_image?: string | null
          event_text_position?: string | null
          event_threshold?: number | null
          event_trigger_mode?: string | null
          event_whatsapp_number?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "socials_settings_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      client_setup_progress_v: {
        Row: {
          business_info_complete: boolean | null
          client_id: string | null
          completed_count: number | null
          created_at: string | null
          logo_uploaded: boolean | null
          percent_complete: number | null
          preferences_set: boolean | null
          products_selected: boolean | null
          setup_complete: boolean | null
          total_steps: number | null
          updated_at: string | null
          whatsapp_connected: boolean | null
        }
        Insert: {
          business_info_complete?: boolean | null
          client_id?: string | null
          completed_count?: never
          created_at?: string | null
          logo_uploaded?: boolean | null
          percent_complete?: never
          preferences_set?: boolean | null
          products_selected?: boolean | null
          setup_complete?: boolean | null
          total_steps?: never
          updated_at?: string | null
          whatsapp_connected?: boolean | null
        }
        Update: {
          business_info_complete?: boolean | null
          client_id?: string | null
          completed_count?: never
          created_at?: string | null
          logo_uploaded?: boolean | null
          percent_complete?: never
          preferences_set?: boolean | null
          products_selected?: boolean | null
          setup_complete?: boolean | null
          total_steps?: never
          updated_at?: string | null
          whatsapp_connected?: boolean | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "admin" | "client"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "client"],
    },
  },
} as const
