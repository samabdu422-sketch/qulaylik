package com.qulaylik.data.remote

import com.qulaylik.data.model.Message
import retrofit2.http.*

interface MessageApiService {
    
    @POST("api/messages/send")
    suspend fun sendMessage(
        @Header("Authorization") token: String,
        @Body message: Message
    ): Message
    
    @GET("api/messages/conversation/{userId}")
    suspend fun getConversation(
        @Header("Authorization") token: String,
        @Path("userId") userId: String,
        @Query("page") page: Int = 1,
        @Query("limit") limit: Int = 50
    ): List<Message>
    
    @PUT("api/messages/mark-read/{messageId}")
    suspend fun markAsRead(
        @Header("Authorization") token: String,
        @Path("messageId") messageId: String
    ): Message
    
    @DELETE("api/messages/{messageId}")
    suspend fun deleteMessage(
        @Header("Authorization") token: String,
        @Path("messageId") messageId: String
    )
}
