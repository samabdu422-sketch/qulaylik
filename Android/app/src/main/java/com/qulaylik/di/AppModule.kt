package com.qulaylik.di

import android.content.Context
import com.qulaylik.data.remote.AuthApiService
import com.qulaylik.data.remote.ConversationApiService
import com.qulaylik.data.remote.MessageApiService
import com.qulaylik.data.repository.AuthRepository
import com.qulaylik.data.repository.ConversationRepository
import com.qulaylik.data.repository.MessageRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {
    
    private const val BASE_URL = "http://10.0.2.2:3000/"
    
    @Provides
    @Singleton
    fun provideRetrofit(): Retrofit {
        return Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
    
    @Provides
    @Singleton
    fun provideAuthApiService(retrofit: Retrofit): AuthApiService {
        return retrofit.create(AuthApiService::class.java)
    }
    
    @Provides
    @Singleton
    fun provideMessageApiService(retrofit: Retrofit): MessageApiService {
        return retrofit.create(MessageApiService::class.java)
    }
    
    @Provides
    @Singleton
    fun provideConversationApiService(retrofit: Retrofit): ConversationApiService {
        return retrofit.create(ConversationApiService::class.java)
    }
    
    @Provides
    @Singleton
    fun provideAuthRepository(authApiService: AuthApiService): AuthRepository {
        return AuthRepository(authApiService)
    }
    
    @Provides
    @Singleton
    fun provideMessageRepository(messageApiService: MessageApiService): MessageRepository {
        return MessageRepository(messageApiService)
    }
    
    @Provides
    @Singleton
    fun provideConversationRepository(conversationApiService: ConversationApiService): ConversationRepository {
        return ConversationRepository(conversationApiService)
    }
}
