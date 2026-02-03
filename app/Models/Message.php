<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'subject',
        'message',
        'is_read',
        'is_public',
        'reply',
        'replied_at',
        'admin_name',
    ];
    
    protected $casts = [
        'is_public' => 'boolean',
        'is_read' => 'boolean',
        'replied_at' => 'datetime',
    ];
}