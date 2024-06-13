export type Environment = {
  appwrite: {
    api: {
      endpoint: string
      key: string
      project: string
    }
    bucket: {
      application: string
    }
    collection: {
      player: string
      profile: string
      application: string
      verification: string
      status: string
      server: string
    }
    database: string
  }
  config: {
    env: string
    hosts: string
  }
  discord: {
    token: string
    publicKey: string
    channel: {
      farewell: string
      application: string
    }
    role: {
      admin: string
      mod: string
      family: string
      supporter: string
      qbitor: string
    }
  }
  pterodactyl: {
    token: string
    url: string
  }
}

export function loadEnvironment(): Environment {
  const env = {
    APPWRITE_ENDPOINT: Deno.env.get('APPWRITE_ENDPOINT'),
    APPWRITE_API_KEY: Deno.env.get('APPWRITE_API_KEY'),
    APPWRITE_PROJECT: Deno.env.get('APPWRITE_PROJECT'),
    APPWRITE_BUCKET_APPLICATION: Deno.env.get('APPWRITE_BUCKET_APPLICATION'),
    APPWRITE_COLLECTION_PLAYER: Deno.env.get('APPWRITE_COLLECTION_PLAYER'),
    APPWRITE_COLLECTION_PROFILE: Deno.env.get('APPWRITE_COLLECTION_PROFILE'),
    APPWRITE_COLLECTION_VERIFICATION: Deno.env.get('APPWRITE_COLLECTION_VERIFICATION'),
    APPWRITE_COLLECTION_APPLICATION: Deno.env.get('APPWRITE_COLLECTION_APPLICATION'),
    APPWRITE_COLLECTION_APPLICATION_STATUS: Deno.env.get('APPWRITE_COLLECTION_APPLICATION_STATUS'),
    APPWRITE_COLLECTION_SERVER: Deno.env.get('APPWRITE_COLLECTION_SERVER'),
    APPWRITE_DATABASE_ID: Deno.env.get('APPWRITE_DATABASE_ID'),
    ENV: Deno.env.get('ENV'),
    ALLOWED_IP: Deno.env.get('ALLOWED_IP'),
    DISCORD_TOKEN: Deno.env.get('DISCORD_TOKEN'),
    DISCORD_PUBLIC_KEY: Deno.env.get('DISCORD_PUBLIC_KEY'),
    DISCORD_CHANNEL_APPLICATION: Deno.env.get('DISCORD_CHANNEL_APPLICATION'),
    DISCORD_CHANNEL_FAREWELL: Deno.env.get('DISCORD_CHANNEL_FAREWELL'),
    DISCORD_ROLE_ADMIN: Deno.env.get('DISCORD_ROLE_ADMIN'),
    DISCORD_ROLE_MOD: Deno.env.get('DISCORD_ROLE_MOD'),
    DISCORD_ROLE_FAMILY: Deno.env.get('DISCORD_ROLE_FAMILY'),
    DISCORD_ROLE_SUPPORTER: Deno.env.get('DISCORD_ROLE_SUPPORTER'),
    DISCORD_ROLE_QBITOR: Deno.env.get('DISCORD_ROLE_QBITOR'),
    PTERODACTYL_TOKEN: Deno.env.get('PTERODACTYL_TOKEN'),
    PTERODACTYL_URL: Deno.env.get('PTERODACTYL_URL'),
  }
  const undefinedEntries = Object.entries(env).filter(([_key, value]) => !value)
  if (undefinedEntries.length > 0) throw new Error(`The following environment variables are not defined: ${undefinedEntries.map(e => e[0]).concat(', ')}`)
  return {
    appwrite: {
      api: {
        endpoint: env.APPWRITE_ENDPOINT!,
        key: env.APPWRITE_API_KEY!,
        project: env.APPWRITE_PROJECT!
      },
      bucket: {
        application: env.APPWRITE_BUCKET_APPLICATION!,
      },
      collection: {
        player: env.APPWRITE_COLLECTION_PLAYER!,
        profile: env.APPWRITE_COLLECTION_PROFILE!,
        application: env.APPWRITE_COLLECTION_APPLICATION!,
        verification: env.APPWRITE_COLLECTION_VERIFICATION!,
        status: env.APPWRITE_COLLECTION_APPLICATION_STATUS!,
        server: env.APPWRITE_COLLECTION_SERVER!
      },
      database: env.APPWRITE_DATABASE_ID!
    },
    config: {
      env: env.ENV!,
      hosts: env.ALLOWED_IP!
    },
    discord: {
      token: env.DISCORD_TOKEN!,
      publicKey: env.DISCORD_PUBLIC_KEY!,
      channel: {
        farewell: env.DISCORD_CHANNEL_FAREWELL!,
        application: env.DISCORD_CHANNEL_APPLICATION!
      },
      role: {
        admin: env.DISCORD_ROLE_ADMIN!,
        mod: env.DISCORD_ROLE_MOD!,
        family: env.DISCORD_ROLE_FAMILY!,
        supporter: env.DISCORD_ROLE_SUPPORTER!,
        qbitor: env.DISCORD_ROLE_QBITOR!
      }
    },
    pterodactyl: {
      token: env.PTERODACTYL_TOKEN!,
      url: env.PTERODACTYL_URL!
    }
  }
}

