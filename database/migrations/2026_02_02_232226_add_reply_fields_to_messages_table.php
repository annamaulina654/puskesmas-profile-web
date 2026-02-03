<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('messages', function (Blueprint $table) {
            $table->boolean('is_public')->default(false)->after('message'); 
            
            $table->text('reply')->nullable()->after('is_public'); 
            
            $table->timestamp('replied_at')->nullable()->after('reply'); 
            
            $table->string('admin_name')->nullable()->after('replied_at'); 
        });
    }

    public function down()
    {
        Schema::table('messages', function (Blueprint $table) {
            $table->dropColumn(['is_public', 'reply', 'replied_at', 'admin_name']);
        });
    }
};
